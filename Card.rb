class Card
  attr_accessor :rank, :suit

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
  end

  def output_card
    puts "#{self.rank} of #{self.suit}"
  end
end

class Deck
  def initialize
      @cards = []
      @ranks = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"]
      @suits = [:hearts, :spades, :diamonds, :clubs]
      @suits.each do |suit|
        @ranks.each do |rank|
          @cards << Card.new(rank, suit)
      end
    end
  end

  def shuffle
    @cards.shuffle!
  end

  def deal
    @cards.shift
  end

  def output_deck
    @cards.each do |card|
      card.output_card
    end
  end
end

deck = Deck.new
deck.shuffle
deck.deal
deck.output_deck
puts "Show top card:"
deck.deal.output_card