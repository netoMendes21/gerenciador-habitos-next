import Image from "next/image";

export default function DayState({ day }: { day: boolean | undefined}) {
let image: [string, string, number?] = ["/images/gray-mark.svg", "gray mark", 14];

if(day === true) image = ["/images/check.svg","checked", 14]; 

if(day === false) image = ["/images/cancel.svg", "cancel red ", 14]

const [src, alt, size] = image;

  return(
    <div className="flex items-center justify-center h-9">
      <Image src={src}
      width={size}
      height={size}
      alt="dia liberado"
      />
    </div>
  )
} 