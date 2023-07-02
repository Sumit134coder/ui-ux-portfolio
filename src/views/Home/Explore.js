import './styles.css'
import Card from '@/components/Home/Card'
import { projectList } from '@/constants'

const Explore = () => {
  return (
    <div className='mx-6 md:mx-[2rem] text-white'>
        <div>
          <h1 className='text-[2rem] font-bold'>Explore</h1>
          <p className='text-[1.2rem]'>Checkout some of the projects:</p>
        </div>
        {/* ---container--- */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-[2rem] mt-[2rem]'>

        {
            projectList.map((project)=> <Card key={project.heading} {...project} />)
        }
        </div>
    </div>
  )
}

export default Explore