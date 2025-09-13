import './OpenTable.css'

export default function OpenTable(){
    return(
        <>
            <div className='opentable'>
                <div className='line1'>make a reservation</div>
                <div className='line2'>POWERED BY OPENTABLE</div>
                <div className='line3'>
                    <a  href='https://www.opentable.com/booking/restref/availability?rid=151186&correlationId=d5ad168f-e842-4060-a4b9-89cf179c9abd&restRef=151186' 
                        target='_blank'>
                            <span>FIND A TABLE</span>
                    </a>
                </div>    
            </div>{/* .opentable */}
        </>
    )
}