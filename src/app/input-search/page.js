
import { Space_Mono } from "next/font/google"
import dynamic from "next/dynamic";

const SearchSelectInput = dynamic(()=>import('@/components/SeachSelect/SearchSelectInput'))
const spaceMono = Space_Mono({
    weight : ['400' , '700'],
    subsets: ['latin']
})


const getUsers = async()=>{
 let d= await fetch('https://dummyjson.com/users?limit=10')
    .then(res => res.json())
    .then((data) =>  {
      return data.users.map((user) =>({
        id:user.id,
        name: `${user.firstName} ${user.maidenName} ${user.lastName}`,
        email: user.email,
        image:user.image,
        username : user.username
     
    }))}
    );

    return d;
}

const TipCalculator = async() => {

  const users = await getUsers()
  // const users = []

  return (
    <div className={`flex flex-col justify-center items-center min-h-[100vh] ${spaceMono.className} tip-bg`}>
    <h1 className="tracking-widest">Search Select Input</h1>
    {/* ---card container--- */}
    <div className="rounded-[2rem] bg-gradient p-[1rem] flex flex-col justify-between items-center w-full lg:w-2/3">
      <h5>hello</h5>
      <SearchSelectInput options={users} />
    </div>
    </div>
  )
}

export default TipCalculator