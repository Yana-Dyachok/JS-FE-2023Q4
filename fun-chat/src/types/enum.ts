export enum MessageType {
    login = 'USER_LOGIN',
    error = 'ERROR',
    logout = 'USER_LOGOUT',
    external_login = 'USER_EXTERNAL_LOGIN',
    external_logout = 'USER_EXTERNAL_LOGOUT',
    active_user = 'USER_ACTIVE',
    inactive_user = 'USER_INACTIVE',
    send_msg = 'MSG_SEND',
    edit_msg = 'MSG_EDIT',
    delete_msg= "MSG_DELETE",
    msg_from_user="MSG_FROM_USER",
    msg_read="MSG_READ",
    msg_deliver="MSG_DELIVER"
}
