'use client'
import React from 'react'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Form from '@components/Form'



const CreatePrompt = () => {
    const [submitting, setSubmitting] = useState(null)
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    })
    const CreatePrompt = async (e) => {



    }
    return (


        <Form

            type="Create"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={CreatePrompt}

        />
    )
}

export default CreatePrompt
