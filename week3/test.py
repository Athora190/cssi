'''def createAgentGreeting(first_name,last_name):
    return '%s. %s %s.'%(last_name,first_name,last_name)
def GreetAgent(firstname,lastname):
    print '%s. %s %s'%(lastname,firstname,lastname)

print "calling GreetAgent() function with arguments James,Bond"
GreetAgent('James','Bond')

print"Calling createAgentGreeting() function with arguments James,Bond"
a = createAgentGreeting("James","Bond")
print a.upper()'''
'''
def add(x,y = 6):
    return x + y
print add(12,13)
print add(15)

def Alarm(h=7,m=30,s=0):
    print'wake up!its %s:%s:%s'%(h,m,s)
Alarm(m=0,s=30,h=4)
Alarm()
Alarm(5)
Alarm(6,30)
Alarm(7,30,45)
'''
v = []
t = list()
b = [1,2,3,4,5]
c = ['one','two','three','four','five']
m = [1,'str',True,2,35,[2,'H',False]]

print c[:4]
print c[2:]
print c[:]
print c[2:4]
