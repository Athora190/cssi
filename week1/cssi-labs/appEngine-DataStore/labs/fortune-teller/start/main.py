#!/usr/bin/python
#
# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import jinja2
import os
import random
from google.appengine.api import urlfetch
import urllib
import json

URL = 'https://www.googleapis.com/customsearch/v1?'
Key = 'AIzaSyBxJp4PYwX0mwH2VpMoSbUWsAXgM_4qomA'
Cx = '010840317941384228862:tb3vdehza5i'


def get_fortune():
    #add a list of fortunes to the empty fortune_list array
    fortune_list=['it will rain', 'you will have a puppy']
    #use the random library to return a random element from the array
    #random_fortune = fortune_list[ random.randint(0,1)]
    return random.choice(fortune_list)


#remember, you can get this by searching for jinja2 google app engine
#jinja_current_directory = "insert jinja2 environment variable here"

jinja_current_directory = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class FortuneHandler(webapp2.RequestHandler):
    def get(self):
        # In part 2, instead of returning this string,
        # make a function call that returns a random fortune.
        results_templates = jinja_current_directory.get_template('templates/fortune-start.html')
        self.response.write(results_templates.render())
    #add a post method
class SimpleURLfetcher(webapp2.RequestHandler):
    def get(self):
        query = 'yellow'
        query_params = {'key': Key,'cx':Cx,'q':query}
        result = urlfetch.fetch(URL + urllib.urlencode(query_params))
        if result.status_code == 200:
            self.response.write(result.status_code)
            self.response.write(result.content)
        else:
            self.response.status_code = result.status_code

    def post(self):
        random_fortune = get_fortune()
        #results_templates = jinja_current_directory.get_template('templates/fortune-results.html')
        user_astro_sign = self.request.get("user_astrological_sign")
        value = {'fortune': random_fortune,'result': user_astro_sign}
        end_value = jinja_current_directory.get_template('templates/fortune-results.html')
        self.response.write(end_value.render(value))

class HelloHandler(webapp2.RequestHandler):
    def get(self):
        self.response.write('Hello World. Welcome to the root route of my app')

#the route mapping
app = webapp2.WSGIApplication([
    #this line routes the main url ('/')  - also know as
    #the root route - to the Fortune Handler
    ('/', HelloHandler),
    ('/predict', FortuneHandler), #maps '/predict' to the FortuneHandler
    ('/simple', SimpleURLfetcher)
], debug=True)
