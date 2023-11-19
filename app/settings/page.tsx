"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

type SliderProps = React.ComponentProps<typeof Slider>

function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      color="primary"
      className={cn("w-[60%] bg-black rounded-full", className)}
      {...props}
    />
  )
}



const Settings = () => {

  const [val, setVal] = useState(10)

  const handleSliderChange = (newValue: any) => {
    setVal(newValue);
  };


  return (
    <div className="w-full p-32">
      <Button className="border rounded-full">
        Add Payment
      </Button>
      <div className="w-64">
        <Slider onScroll={handleSliderChange} className="mt-6 bg-black rounded-full" max={100} step={1} value={[val]} onValueChange={handleSliderChange} />
        <p className="text-center">{val}$ per month</p>
      </div>
      <Button className="border rounded-full bg-blue-400 mt-5">
        Save
      </Button>
    </div>
  )
}
export default Settings