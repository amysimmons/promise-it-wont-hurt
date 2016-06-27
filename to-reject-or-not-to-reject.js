/*
   * This code is bad, but nonetheless common and has the nasty result of
   * calling the supplied callback more than once (possibly destroying the
   * earth?). It is conventional to return the first invocation of callback
   * but it’s easy to overlook!


  function myFunc(user, callback) {
    if (user) {
      callback(null, user);
    }

    return callback('No user was found', null);
  }

## Task

Let’s build a simple script to prove to ourselves that promises may only
resolve one time and all future attempts to resolve them will simply be ignored.

First, create a promise using the Promise constructor as we have been doing.

In the promise’s executor, immediately attempt to fulfill the promise with a
value of 'I FIRED'.

Then, after the fulfill call, immediately try to reject the promise with an
Error created with parameter 'I DID NOT FIRE'.

After the promise creation, create a function onRejected with one parameter
error that prints the Error’s message with console.log.

Lastly, pass console.log and the function you just created as the success
and rejection handlers respectively.

If successful, your script should only log “I FIRED” and should not log
“I DID NOT FIRE”.

Note that unlike the prior exercises, you do not have to use setTimeout with
this.
*/

var promise = new Promise(function (fulfill, reject) {
  fulfill('I FIRED')
  reject('I DID NOT FIRE')
});

var onRejected = function(err){
  console.log(err)
}

promise.then(
  (str) => {
    console.log(str)
  },
  onRejected
)

