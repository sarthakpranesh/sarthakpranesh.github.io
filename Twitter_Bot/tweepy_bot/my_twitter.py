import tweepy
import time
print("tweepy imported code = 1")

CONSUMER_KEY = 'vGix2sqglHYYe5KrImfwT9xHP'
CONSUMER_SECRET = 'gvyyd285EvdKjKOXBw4yBIDUxHxQXRIHWTtdeeGHHkycJSxT2R'
ACCESS_KEY = '784612267384078338-bYs2tP1QkM5iZ8Ds5znHVWqdupmpEgx'
ACCESS_SECRET = 'mlWavnetOSzRCHR3EWHfSISJA0HdDkOVbPo0Qz80n7t6p'

auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_KEY, ACCESS_SECRET)
api = tweepy.API(auth)

FILE_NAME = 'last_seen_id.txt'

print("making retrieve id func")
def retrieve_last_seen_id(file_name):
    f_read = open(file_name,'r')
    last_seen_id = int(f_read.read().strip())
    f_read.close()
    return last_seen_id
print("func created")

print("making storing last id func")
def store_last_seen_id(last_seen_id, file_name):
    f_write = open(file_name, 'w')
    f_write.write(str(last_seen_id))
    f_write.close()
    return 
print("func created")

def reply_to_tweets():
    #1079070180733607937 id for testing
    print("initialing api")
    last_seen_id = retrieve_last_seen_id(FILE_NAME)
    mentions = api.mentions_timeline(
        last_seen_id,
        tweet_mode='extended')
    for mention in reversed(mentions):
        print(str(mention.id) + ' - ' + mention.full_text)
        last_seen_id = mention.id
        store_last_seen_id(last_seen_id, FILE_NAME)
        if '#helloworld' in mention.full_text.lower():
            print("Found #helloworld by id-->", mention.id)
            api.update_status('@'+mention.user.screen_name + 
            """
            #HelloWorld 
            Hi This is the test reply from me the WEBCODER bot.
            I was created using python 3 and tweepy and my
            source code is maintained by WEBCODERS.
            Find them at sarthakpranesh.github.io """,
            mention.id)

    print("api working, end of file code = 1")

while True:
    reply_to_tweets()
    time.sleep(15)
