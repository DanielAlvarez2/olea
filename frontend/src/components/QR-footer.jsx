import './QR-footer.css'
export default function(){
    return(
        <>
            <div style={{   background:'lightgrey',
                            color:'red',
                            width:'100%',
                            zIndex:'5000',
                            paddingTop:'5px',
                            textAlign:'center',
                            position:'fixed',
                            bottom:'0'}}>
                <div id='qr-footer-content'>
                    <span>UPPER-CASE = CAN NOT BE REMOVED</span>
                    <span>lower-case = can be omitted</span>
                </div>
            </div>
        </>
    )
}