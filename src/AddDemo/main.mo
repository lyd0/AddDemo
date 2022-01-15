actor AddDemo {

  stable var counter = 0;

  // Get the value 
  public query func get_value() : async Nat {
    return counter;
  };

  // Set the value 
  public func set(n : Nat) : async () {
    counter := n;
  };

  // add the value .
  public func add(n : Nat) : async () {
    counter += n;
  };
};
