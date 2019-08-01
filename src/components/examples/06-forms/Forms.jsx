import React, { useState } from 'react'

import styles from './Forms.module.css'

export default () => {
    const [name, setName] = useState('')
    const [jobDescription, setJobDescription] = useState('')
    const [favoriteFruit, setFavoriteFruit] = useState('')

    const createChangeHandler = setter => {
        return event => {
            setter(event.target.value)
        }
    }

    return (
        <div>
            <h1>Forms</h1>
            <form className={styles.form} name="reactForm">
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={createChangeHandler(setName)}
                />
                <label htmlFor="jobDescription">Job Description:</label>
                <textarea
                    id="jobDescription"
                    rows="10"
                    value={jobDescription}
                    onChange={createChangeHandler(setJobDescription)}
                />
                <label htmlFor="favoriteFruit">FavoriteFruit</label>
                <select
                    name="favoriteFruit"
                    id="favoriteFruit"
                    value={favoriteFruit}
                    onChange={createChangeHandler(setFavoriteFruit)}
                >
                    <option value="">-- Select Value --</option>
                    <option value="apple">Apple</option>
                    <option value="orange">Orange</option>
                    <option value="lime">Lime</option>
                </select>
            </form>
            <br />
            <br />
            <div>
                <span>Name: {name}</span>
            </div>
            <div>
                <span>Job Description: {jobDescription}</span>
            </div>
            <div>
                <span>Favorite Fruit: {favoriteFruit}</span>
            </div>
        </div>
    )
}
