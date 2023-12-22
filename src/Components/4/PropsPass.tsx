type a = {
  name:string
  age:number
  bio:string
}
const PropsPass = (props:a) => {
  return (
    <div>
      <div>
        {props.name}
      </div>
      <div>
        {props.age}
      </div>
      <div>
        {props.bio}
      </div>
    </div>
  )
}
export default PropsPass 
