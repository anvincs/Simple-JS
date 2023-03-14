let oddsum = 0,evensum = 0
for(let i=1;i<=100;i++)
{
    if(i%2==0)
    {
        evensum+=i
    }
    else
    {
        oddsum+=i
    }
}
console.log("The sum of odd numbers is",oddsum)
console.log("The sum of even numbers is",evensum)