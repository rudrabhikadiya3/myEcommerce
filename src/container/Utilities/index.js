export const isLogin = () =>{
    let localdata = localStorage.getItem('user')
    if (localdata === 'user') {
        return true
    } else {
        return false
    }
}