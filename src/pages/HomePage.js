import React from 'react';

import { Navbar, Question } from '../components';

const Home = () => {
    return (
        <>
            <Navbar />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2em' }}>
                <div style={{ width: '80%' }}>
                    <Question
                        question={'Que es un HOC'}
                        options={[{
                            name: 'a) Hello',
                            color: '#2F6DAE',
                        }, {
                            name: 'b) Hello',
                            color: '#2C9CA6',
                        }, {
                            name: 'c) Hello',
                            color: '#ECA82C',
                        }, {
                            name: 'd) Hello',
                            color: '#D4546A',
                        }]} />
                </div>

            </div>
        </>
    );
}

export default Home;