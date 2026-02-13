import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { GuestbookEntry } from '../backend';

export function useGuestbook() {
  const { actor, isFetching: isActorFetching } = useActor();
  const queryClient = useQueryClient();

  const entriesQuery = useQuery<GuestbookEntry[]>({
    queryKey: ['guestbook-entries'],
    queryFn: async () => {
      if (!actor) return [];
      const entries = await actor.getAllEntries();
      // Sort in reverse chronological order (newest first)
      return entries.sort((a, b) => {
        if (a.timestamp > b.timestamp) return -1;
        if (a.timestamp < b.timestamp) return 1;
        return 0;
      });
    },
    enabled: !!actor && !isActorFetching,
  });

  const addEntryMutation = useMutation({
    mutationFn: async ({ message, name }: { message: string; name: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.addEntry(message, name);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['guestbook-entries'] });
    },
  });

  return {
    entries: entriesQuery.data || [],
    isLoading: entriesQuery.isLoading,
    isError: entriesQuery.isError,
    error: entriesQuery.error,
    addEntry: (message: string, name: string) => 
      addEntryMutation.mutateAsync({ message, name }),
    isSubmitting: addEntryMutation.isPending,
  };
}
