import CourceContentItem from './CourceContentItem';


function Home({ courceContent }) {
    {
        return (
            <div>
                <h1>Hi From React</h1>

                {courceContent.map((val, key) => {

                    return (

                        <CourceContentItem key={key} isVisibale>
                            <p style={{
                                fontSize: '20px',
                                backgroundColor: 'wheat',
                                color: val.status === 'completed' ? 'green' : val.status === 'ongoing' ? 'orange' : 'black'
                            }}>

                                {val.text}
                                <span style={{ color: 'red', fontSize: '20px', fontWeight: 'bold' }}> - {val.status}</span>
                            </p>
                        </CourceContentItem>
                    );
                })}
            </div>

        );


    }

}

export default Home;