function get(obj, k){
    let path = k.replaceAll('[','.').replaceAll(']','')
    let keys = path.split('.').filter(Boolean)
    let current = obj
    
    for(let key of keys){
        current = current[key]

        if(current === undefined){
            return undefined
        }
    }

    return current
}




const obj = [{
    developer: "Tom"
 }, {
    count: [0, 1]
 }];
 
 console.log(get(obj, "[1].count[0]"));


 function pipe(...param){

    return (val) => {
        for(let par of param){
            val = par(val)
        }

        return val
    }
 }


 const val = { salary: 10000 };

const getSalary = (person) => person.salary
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - (grossSalary * .3);

const result = pipe(
  getSalary,
  addBonus,
  deductTax 
)(val);

console.log(result)

const arr = [
    { name: "Amir", id: "1" },
    { name: "Samlan", id: "2" },
    { name: "Shahrukh", id: "0" },
  ];


  const filterObject = (arr, filter) => {
    // let isIndex = false
    if(typeof filter === 'number'){
       return arr[filter]
    }else{
        for(const entry of arr){
            for(const [key, value] of Object.entries(entry)){
                if(value == filter){
                    return entry
                }
            }
        }
    }
  }
  
  console.log(filterObject(arr, 0)); // { name: "Amir", id: "1" }
  console.log(filterObject(arr, "Amir")); // { name: "Amir", id: "1" }
  console.log(filterObject(arr, "0")); // { name: "Shahrukh", id: "0" }