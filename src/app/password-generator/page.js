import PassGenerator from "@/views/Password-generator"

export const metadata = {
    title: 'Password Generator',
    description: 'Genrerate strong passwords'
}

const PasswordGenerator = () => {
  return (
    <div className="min-h-screen h-auto lg:h-screen flex justify-center items-center w-screen bg-[#DAFFFB]">
        <PassGenerator />
    </div>
  )
}

export default PasswordGenerator