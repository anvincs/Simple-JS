function bmi(weight,height)
// weight in kg and height in meters
{
    let bmi_val = weight/(height**2)
    if(bmi_val<18.5)
    {
        console.log(" You are underweight")
    }
    else if(bmi_val<25)
    {
        console.log("Your  weight is normal")
    }
    else if(bmi_val<30)
    {
        console.log("You are overweight")
    }
    else
    {
        console.log("You are obese")
    }
}

bmi(64,1.72)