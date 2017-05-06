from textblob import TextBlob

monty = TextBlob("We are no longer the Knights who say Ni. "
                    "We are now the Knights who say Ekki ekki ekki ,,PTANG.")
print(monty.word_counts['PTANG'])
print(monty.sentiment)
