import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {Divider} from "@nextui-org/divider"
import {Link} from "@nextui-org/link";

const Tech = ( {img , header , url , description , doc} : {img:any , header:any , url:any , description:any , doc:any}) =>{
 return (
    <Card className="max-w-[300px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src={img}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{header}</p>
          <p className="text-small text-default-500">{url}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{description}</p>
      </CardBody>

       <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href={doc}
        >
          more
        </Link>
      </CardFooter>

    </Card>
  );}


const TechStack = () => {
  return(
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold">Techstack</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-10">
          <Tech doc={"https://nextjs.org/docs"} url={"nextjs.org"} img={"https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"} header={"next js"} description={"powerfull tool that uses javascript / typescript to build powerfull responsive websites"} />
          <Tech doc={"https://tailwindcss.com/docs/installation"} url={"tailwindcss.com"} img={"https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"} header={"tailwindcss"} description={"Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your HTML."} />
        </div>
        <div className="flex flex-row gap-10">
          <Tech doc={"https://docs.flutter.dev/"} url={"flutter.com"} img={"https://www.svgrepo.com/show/353751/flutter.svg"} header={"flutter"} description={"Flutter is an open-source UI toolkit by Google for building natively compiled applications for mobile, web, and desktop from a single codebase."} />
          <Tech doc={"https://supabase.com/docs"} url={"supabase.com"} img={"https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png"} header={"supabase"} description={"Supabase is an open-source backend-as-a-service providing powerfull real-time databases, authentication, and storage for applications."} />
        </div>
      </div>
    </div>
  )
}

export default TechStack;
