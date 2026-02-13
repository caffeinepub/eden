import Time "mo:core/Time";
import Text "mo:core/Text";
import Array "mo:core/Array";
import List "mo:core/List";
import Order "mo:core/Order";

actor {
  type GuestbookEntry = {
    message : Text;
    timestamp : Time.Time;
    name : Text;
  };

  module Entry {
    public func compareByTimestamp(a : GuestbookEntry, b : GuestbookEntry) : Order.Order {
      if (a.timestamp < b.timestamp) {
        #less;
      } else if (a.timestamp > b.timestamp) {
        #greater;
      } else {
        #equal;
      };
    };
  };

  let guestbook = List.empty<GuestbookEntry>();

  public shared ({ caller }) func addEntry(messageText : Text, nameText : Text) : async () {
    let entry : GuestbookEntry = {
      message = messageText;
      timestamp = Time.now();
      name = if (nameText == "") { "Anonymous" } else { nameText };
    };
    guestbook.add(entry);
  };

  public query ({ caller }) func getAllEntries() : async [GuestbookEntry] {
    guestbook.toArray().sort(Entry.compareByTimestamp);
  };
};
