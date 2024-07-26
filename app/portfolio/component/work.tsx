import { Code } from "@nextui-org/code";
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import fashion from "../../../assets/images/fashion.png"; 
import cli from "../../../assets/images/cli.png"; 
import mobile from "../../../assets/images/mobile.png"; 
import posters from "../../../assets/images/posters.png"; 
import rustchat from "../../../assets/images/rustchat.png"; 
import sveltechat from "../../../assets/images/sveltechat.png"; 
import automation from "../../../assets/images/automation.png"; 
import portfolio from "../../../assets/images/portfolio.png"; 

const ListWork = ({url , img , title , tech} : {url:any , img:any , title:any , tech:any}) => {
  return(
   <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Link
          isExternal
          showAnchorIcon
          href={url}
        >
          view source code
        </Link>
        <small className="text-default-500">{tech}</small>
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={img}
          width={270}
        />
      </CardBody>
    </Card>
  );
}





const Work = () => {
  return(
    <div className="flex flex-col gap-7">
      <div>
        <Code color="success">@client:~$ sudo ShowWork</Code>
      </div>
       <div className="flex flex-col gap-12 md:flex-row  flex-grow"> 
        <ListWork title={"Full stack online fashion store"} tech={"using nextjs + pocketbase"} url={"https://github.com/ayoubbijarche/fashion-store-sample"} img={fashion}/>
        <ListWork title={"A full stack chat app sample"} tech={"using svelte + pocketbase"} url={"https://github.com/ayoubbijarche/fashion-store-sample"} img={"https://nextui.org/images/hero-card-complete.jpeg"}/>
        <ListWork title={"A full stack mobile app online store"} tech={"flutter + pocketbase"} url={"https://github.com/ayoubbijarche/fashion-store-sample"} img={"https://nextui.org/images/hero-card-complete.jpeg"}/>
        <ListWork title={"Full stack rooms chat app using rust"} tech={"using rust rocket framework"} url={"https://github.com/ayoubbijarche/fashion-store-sample"} img={"https://nextui.org/images/hero-card-complete.jpeg"}/>
       </div>
       <div className="flex flex-col gap-12 md:flex-row  flex-grow"> 
        <ListWork title={"a frontend manga online store"} tech={"nextjs"} url={"https://github.com/ayoubbijarche/fashion-store-sample"} img={"https://nextui.org/images/hero-card-complete.jpeg"}/>
        <ListWork title={"a git automation command line tool"} tech={"using rust"} url={"https://github.com/ayoubbijarche/fashion-store-sample"} img={"https://nextui.org/images/hero-card-complete.jpeg"}/>
        <ListWork title={"python email automation sender with smtp"} tech={"python"} url={"https://github.com/ayoubbijarche/fashion-store-sample"} img={"https://nextui.org/images/hero-card-complete.jpeg"}/>
        <ListWork title={"my portfolio source code"} tech={"nextjs + nextui"} url={"https://github.com/ayoubbijarche/fashion-store-sample"} img={"https://nextui.org/images/hero-card-complete.jpeg"}/>
      </div>
    </div>
  )
}

export default Work;
