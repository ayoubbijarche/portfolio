import Image from 'next/image'
import me from "../assets/me.jpg"
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider"
import {Link} from '@nextui-org/link';

const Avatar = () => {
  return(
    <div className=" ml-6 mt-6 flex min-w-dvw ">
        <div className="rounded-full bg-black w-[75px]  justify-items-center items-center ">
          <Image alt="" src={me} className="rounded-full"/>
        </div>
    </div>
  )
}

const Contact = () => {
  return(
    <div className='flex flex-row gap-3'>
      <Link isExternal href='mailto:ayoubbijarche5@gmail.com'>
        <Image alt=''  width={30}  height={30} src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"/>
      </Link>      

      <Link isExternal href='https://www.fiverr.com/ayoubbijarche?up_rollout=true'>
        <Image alt=''  width={34}  height={34} src="https://upload.wikimedia.org/wikipedia/commons/1/18/Fiverr_Logo_09.2020.svg"/>
      </Link>      
    </div>
  )
}


const Profile = () => {
  return(
    <Card className="max-w-[500px] max-h-[400px]">
      <CardHeader className="flex gap-3">
        <Avatar/>
        <div className="flex flex-col">
          <p className="text-md">Ayoub bijarche</p>
          <p className="text-small text-default-500">(Software Dev/Painter)</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>Hi my name is Ayoub i am an indie Software Developer driven by passion i expanded my skills on different fields of programming and coding such as Web Development, Full Stack Development, Cross Mobile Apps Development , Automation and more, using Different Tech stacks & Modules to reach the highest efficiency & quality.</p>
      </CardBody>
      <Divider/>
      <CardBody>
        <Contact/>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/ayoubbijarche"
        >
          View Github Profile
        </Link>
      </CardFooter>
    </Card>  )
}

export default Profile;
