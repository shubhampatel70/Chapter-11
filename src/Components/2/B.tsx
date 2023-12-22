
const B = () => {

    function generic <T> (...param:T[]):T[]{
        return param;
    }
    
    const a = generic(1,2,3)
    
    console.log(a);
    
  return (
    <div>
        
    </div>
  )
}

export default B