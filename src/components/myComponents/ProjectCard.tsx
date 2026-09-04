import Image from 'next/image';
import profilePic from "../../../public/profile.jpg"
import { Button } from '../ui/button';
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

export default function ProjectCard() {
  return (
    <div>
      <Card className="relative mx-auto w-80 max-w-sm pt-0">
        <Image
          src={profilePic}
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover"
        />
        <CardHeader>
          <CardAction>
            <Badge variant="secondary" >Teste</Badge>
          </CardAction>
          <CardTitle>Teste</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ad quis minima voluptatibus, repellendus nulla dolores.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className='w-full'>Teste</Button>
        </CardFooter>
      </Card>
    </div>
  )
}