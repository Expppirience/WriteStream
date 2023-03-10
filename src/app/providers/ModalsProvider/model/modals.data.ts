import { IModalContext, ModalsEnum } from '.'
import { AddBlogModal } from '@features/AddBlogModal'
import { AddUserModal } from '@features/AddUserModal'
import { DeleteBlogModal } from '@features/DeleteBlogModal'
import { DeleteCommentModal } from '@features/DeleteCommentModal'
import { DeletePostModal } from '@features/DeletePostModal'
import { DeleteUserModal } from '@features/DeleteUserModal'
import { PostModal } from '@features/PostModal'
import { createContext, useContext } from 'react'

export const ModalComponents: any = {
	[ModalsEnum.ADD_BLOG]: AddBlogModal,
	[ModalsEnum.ADD_POST]: PostModal,
	[ModalsEnum.DELETE_BLOG]: DeleteBlogModal,
	[ModalsEnum.DELETE_POST]: DeletePostModal,
	[ModalsEnum.ADD_USER]: AddUserModal,
	[ModalsEnum.DELETE_USER]: DeleteUserModal,
	[ModalsEnum.DELETE_COMMENT]: DeleteCommentModal
}

export const initialState: IModalContext = {
	showModal: () => void 0,
	closeModal: () => void 0,
	store: {}
}

export const ModalContext = createContext(initialState)
export const useModalContext = () => {
	return useContext(ModalContext)
}
