const users = [
    { id: 1, fullName: 'Alice Johnson', age: 25, isActive: true },
    { id: 2, fullName: 'Bob Smith', age: 30, isActive: false },
    { id: 3, fullName: 'Charlie Adams', age: 35, isActive: true },
    { id: 4, fullName: 'David Brown', age: 40, isActive: false },
    { id: 5, fullName: 'Eve Davis', age: 28, isActive: true },
  ];


  class ActiveUsers{
    constructor(users){
        this.users = users
    }

    activeUsers(){
        
        const activeUsers = this.users.filter((elem) => elem.isActive)
        // const sortedUSser = activeUsers.sort((a, b) =)
        // for(let i =0;i<this.users.length;i++){

        // }
        return activeUsers.map(user => user.fullName).sort((a, b) => {
            const aUser = a.split(' ').pop()
            const bUser = b.split(' ').pop()

            return aUser.localeCompare(bUser)
        })
    }

    averageAge(){
        const avearge = this.users.reduce((sum, user)=> sum+user.age, 0)/this.users.length
        return avearge.toFixed(2)
    }

    summary(){
        let string = ''
        const activeUsers = this.users.filter((elem) => elem.isActive)
        for(let i=0;i<activeUsers.length;i++){
            string += activeUsers[i].fullName +'( age '+activeUsers[i].age+'), '
        }

        return string
    }
  }

  const getActiveUser = new ActiveUsers(users)
  console.log(getActiveUser.activeUsers())

  console.log(getActiveUser.averageAge())
  console.log(getActiveUser.summary())