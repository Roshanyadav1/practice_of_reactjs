import React, { useEffect, useState } from 'react';
import './gem.css'
function Generation() {
    const [display, setDisplay] = useState(false)
    const [zero, setZero] = useState("Ramdar")
    const [first, setFirst] = useState(["Ramkaran"])
    const [second, setsecond] = useState(["Ballu", "Dariaao"])
    const [third, setThird] = useState(["Ramesh", "Narmada"])
    const [forth, setForth] = useState(["Ramkrishna", "Brajesh", "Ramgopal ", "Rajendra"])
    const [fifth, setFifth] = useState(["Roshan", "Ritik", "Rakhi", "Meena"])
    var data;
    const members = ["Ramdar", "Ramkaran", "Roshan", "Ritik", "Rakhi", "Meena", "Ramkrishna", "Brajesh", "Ramgopal", "Rajendra", "Ramesh", "Narmada", "Ballu", "Dariaao"]
    const [search, setSearch] = useState('')
    const [value, setValue] = useState('')
    const [show, setShow] = useState(false)

    const members2 = ["Ballu",
        "Brajesh",
        "Dariaao",
        "Meena",
        "Narmada",
        "Rajendra",
        "Rakhi",
        "Ramdar",
        "Ramesh",
        "Ramgopal",
        "Ramkaran",
        "Ramkrishna",
        "Ritik",
        "Roshan"]
    var sortedData = members.sort()
    var reversedData = members2.reverse();
    const find = () => {
        members.map((item) => {
            if (search === item) {
                setValue(search)
                // alert(`Data found ${search} `)
                return 0;
            }
        })
    }
    useEffect(() => {
        find()

        return () => {

        }
    }, [search])


    const sortTable = () => {
        setShow(!show)
        console.log(sortedData);
    }

    return (
        <div className='bigcontainer' >
            <>
                <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
                {
                    <h1>{value}</h1>
                }

                <button onClick={sortTable} >sort</button>

                {
                    show ? <div className='mainContainer'>
                        <div className='heading'>Asc Sorted list</div>
                        <ul>
                            <div>
                                {
                                    sortedData.map((item) => {
                                        if (value === item) {
                                            return (
                                                <li style={{ backgroundColor: 'red', width: '218px' }}>{item}</li>
                                            )
                                        }
                                        return (
                                            <>
                                                <h5 style={{ backgroundColor: 'green', width: '218px' }}>{item}</h5>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </ul>
                        <div className='heading'>Des Sorted list</div>
                        <ul>
                            <div>
                                {
                                    reversedData.map((item) => {
                                        if (value === item) {
                                            return (
                                                <li style={{ backgroundColor: 'red', width: '218px' }}>{item}</li>
                                            )
                                        }
                                        return (
                                            <>
                                                <h5 style={{ backgroundColor: 'green', width: '218px' }}>{item}</h5>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </ul>
                    </div>

                        :
                        <div className='hello'>
                            <div className='mainContainer'>
                                <div className='heading'>Ramdar sigh family</div>
                                <ul>
                                    <div>
                                        {
                                            first.map((item) => {
                                                if (value === item) {
                                                    return (
                                                        <li style={{ backgroundColor: 'red', width: '218px' }}>{item}</li>
                                                    )
                                                }
                                                return (
                                                    <li style={{ backgroundColor: 'green', width: '218px' }}>{item}</li>
                                                )
                                            })
                                        }
                                    </div>
                                </ul>
                            </div>
                            <div className='mainContainer'>
                                <div className='heading'>Ramkaran sigh family</div>
                                <ul>
                                    <div>
                                        {
                                            second.map((item) => {
                                                if (value === item) {
                                                    return (
                                                        <li style={{ backgroundColor: 'red', width: '218px' }}>{item}</li>
                                                    )
                                                }
                                                if (item === "Ballu") {
                                                    return (
                                                        <li style={{ backgroundColor: 'green', width: '218px' }}>{item}</li>
                                                    )
                                                }
                                                return (
                                                    <li>{item}</li>
                                                )
                                            })
                                        }
                                    </div>
                                </ul>
                            </div>
                            <div className='mainContainer'>

                                <div className='heading'>Ballu family</div>
                                <ul>
                                    <div>
                                        {
                                            third.map((item) => {
                                                if (item === "Ramesh") {
                                                    if (value === item) {
                                                        return (
                                                            <li style={{ backgroundColor: 'red', width: '218px' }}>{item}</li>
                                                        )
                                                    }
                                                    return (
                                                        <li style={{ backgroundColor: 'green', width: '218px' }}>{item}</li>
                                                    )
                                                }
                                                return (
                                                    <li>{item}</li>
                                                )
                                            })
                                        }
                                    </div>
                                </ul>
                            </div>
                            <div className='mainContainer'>
                                <div className='heading'>Ramesh family</div>
                                <ul>
                                    <div>
                                        {
                                            forth.map((item) => {
                                                if (value === item) {
                                                    return (
                                                        <li style={{ backgroundColor: 'red', width: '218px' }}>{item}</li>
                                                    )
                                                }
                                                if (item === "Ramkrishna") {
                                                    return (
                                                        <li style={{ backgroundColor: 'green', width: '218px' }}>{item}</li>
                                                    )
                                                }

                                                return (
                                                    <li>{item}</li>
                                                )
                                            })
                                        }
                                    </div>
                                </ul>
                            </div>
                            <div className='mainContainer'>
                                <div className='heading'>Ramkrishna family</div>
                                <ul>
                                    <div>
                                        {
                                            fifth.map((item) => {
                                                if (value === item) {
                                                    return (
                                                        <li style={{ backgroundColor: 'red', width: '218px' }}>{item}</li>
                                                    )
                                                }
                                                if (item === "Roshan") {
                                                    return (
                                                        <li style={{ backgroundColor: 'lightblue', width: '218px' }}>{item}</li>
                                                    )
                                                }
                                                return (
                                                    <li>{item}</li>
                                                )
                                            })
                                        }
                                    </div>
                                </ul>
                            </div>


                        </div>

                }

            </>


        </div >
    )
}

export default Generation