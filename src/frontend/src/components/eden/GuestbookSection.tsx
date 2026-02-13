import { Section } from './Section';
import { useGuestbook } from '../../hooks/useGuestbook';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Card, CardContent } from '../ui/card';
import { Loader2, Send } from 'lucide-react';
import { useState } from 'react';

export function GuestbookSection() {
  const { entries, isLoading, addEntry, isSubmitting } = useGuestbook();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!message.trim()) {
      setError('Please enter a message');
      return;
    }

    if (message.length > 500) {
      setError('Message must be 500 characters or less');
      return;
    }

    try {
      await addEntry(message.trim(), name.trim());
      setName('');
      setMessage('');
    } catch (err) {
      setError('Failed to submit message. Please try again.');
    }
  };

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1_000_000);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Section id="guestbook" className="bg-muted/30">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="mb-6">Messages of Peace</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Share your thoughts, hopes, and peaceful intentions with our global community. 
          Every message contributes to the collective harmony we're building together.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-12">
        {/* Submission Form */}
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name (Optional)</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Anonymous"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={50}
                  disabled={isSubmitting}
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Share your message of peace..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={500}
                  rows={4}
                  disabled={isSubmitting}
                  className="rounded-lg resize-none"
                  required
                />
                <p className="text-xs text-muted-foreground text-right">
                  {message.length}/500 characters
                </p>
              </div>

              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Share Your Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Messages List */}
        <div className="space-y-6">
          <h3 className="text-2xl text-center">Recent Messages</h3>
          
          {isLoading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : entries.length === 0 ? (
            <Card className="shadow-soft">
              <CardContent className="py-12 text-center text-muted-foreground">
                No messages yet. Be the first to share your message of peace!
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {entries.map((entry, index) => (
                <Card key={index} className="shadow-soft hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <p className="font-medium text-foreground">
                          {entry.name}
                        </p>
                        <time className="text-xs text-muted-foreground whitespace-nowrap">
                          {formatDate(entry.timestamp)}
                        </time>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {entry.message}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
