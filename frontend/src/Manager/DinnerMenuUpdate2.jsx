
export default function DinnerMenuUpdate2(){

    function testForm(){
        alert('test form working')
    }

    return(
        <>
            <form action={testForm}>
                <input type='text' />
                <input type='submit' />
            </form>
        </>    
    )
}


{/* <form action="javascript:throw new Error('A React form was unexpectedly submitted. 
    If you called form.submit() manually, consider using form.requestSubmit() instead. 
    If you\'re trying to use event.stopPropagation() in a submit event handler, consider 
    also calling event.preventDefault().')"><input type="text"><input type="submit"></form> */}