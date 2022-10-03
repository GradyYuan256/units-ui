// import ClipboardJS from 'clipboard'
// import { useMessage } from 'units-ui'

// export const useCopy = (className) => {
//     if(!className) {
//         throw new Error('copy function need className parameter.')
//     }
//     const clipboard = new ClipboardJS(`.${className}`)
//     clipboard.on('success', function(e) {
//         const msg = useMessage()
//         msg({
//             message: '复制成功',
//             type: "success",
//             onClose: () => {
                
//             },
//         });
//         e.clearSelection();
//         clipboard.destroy()
//     })
//     clipboard.on('error', function() {
//         const msg = useMessage()
//         msg({
//             message: '复制失败',
//             type: "error",
//             onClose: () => {},
//         });
//         clipboard.destroy()
//     })
// }
