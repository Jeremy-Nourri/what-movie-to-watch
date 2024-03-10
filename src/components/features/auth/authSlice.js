import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { SIGNUP_URL, SIGNIN_URL } from '../../../firebase/firebaseConfig';
import axios from 'axios'

const errorMessages = {
    'EMAIL_EXISTS': 'Cet email est déjà utilisé',
    'EMAIL_NOT_FOUND': 'Email ou mot de passe incorrect',
    'INVALID_PASSWORD': 'Email ou mot de passe incorrect',
    'INVALID_LOGIN_CREDENTIALS': 'Email ou mot de passe incorrect',
}


export const signUp = createAsyncThunk(
    'auth/signUp',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(SIGNUP_URL, {
                email: userData.email,
                password: userData.password,
                returnSecureToken: true
            })
            localStorage.setItem('token', response.data.idToken)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data.error.message)

        }
    }
)

export const signIn = createAsyncThunk(
    'auth/signIn',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(SIGNIN_URL, {
                email: userData.email,
                password: userData.password,
                returnSecureToken: true
            })
            localStorage.setItem('token', response.data.idToken)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data.error.message)
        }
    }
)


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        message: null,
        modalIsOpen: false
    },
    
    reducers: {
        logOut: (state) => {
            state.user = null
            localStorage.removeItem('token')
        },
        removeMessage: (state) => {
            state.message = null
        },
        openModal: (state) => {
            state.modalIsOpen = true
        },
        closeModal: (state) => {
            state.modalIsOpen = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUp.fulfilled, (state, action) => {
                state.user = action.payload
                if (localStorage.getItem('token')) {
                    state.message = 'Inscription réussie'
                }
            })
            .addCase(signUp.rejected, (state, action) => {
                state.message = errorMessages[action.payload] || 'Erreur lors de l\'inscription'
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.user = action.payload
                state.message = 'Connexion réussie'
            })
            .addCase(signIn.rejected, (state, action) => {
                state.message = errorMessages[action.payload] || 'Erreur lors de l\'inscription'
            })
    }
});



export const { logOut, openModal, closeModal, removeMessage } = authSlice.actions
export default authSlice.reducer