module.exports = async ({ orango }) => {
  // get a reference to User model
  const User = orango.model('User')

  // create query
  let query = User.find().one()

  // FOR DEMO ONLY - show the AQL
  let aql = await query.toAQL(true)
  console.log(aql.cyan)

  // exec query
  let rawData = await query.exec()
  console.log('rawData'.green, rawData)

  // convert data to model
  let user = User.fromJSON(rawData)
  console.log('modelData'.green, user)
  
  // computed properties supported as getters
  console.log('fullName'.green, user.fullName)

  // toJSON automatically includes computed properties
  console.log('JSON'.green, JSON.stringify(user, null, 3))
}
