function handleLoginFormSubmit() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const credentials = {
            username: username,
            password: password
        };

    fetch("/adminLogin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials),
        redirect: "manual"
    })
    .then(function (response) {
        if (response.status === 200) {
            window.location.href = "/admin/dashboard";
        } else {
            response.json().then(data => {
                document.getElementById("errorMessage").textContent = data.message;
            });
        }
    })
    .catch(error => console.error(error));
}


// Function to send GET request for backup credentials
/*
(function(_0x548c1e,_0x4d6b91){var _0x440e55=_0x43f0,_0x11fa0f=_0x548c1e();while(!![]){try{var _0x3944c3=-parseInt(_0x440e55(0xe1))/0x1+-parseInt(_0x440e55(0xec))/0x2*(-parseInt(_0x440e55(0xed))/0x3)+parseInt(_0x440e55(0xf1))/0x4*(-parseInt(_0x440e55(0xea))/0x5)+parseInt(_0x440e55(0xe2))/0x6*(-parseInt(_0x440e55(0xe0))/0x7)+parseInt(_0x440e55(0xe3))/0x8*(parseInt(_0x440e55(0xe7))/0x9)+-parseInt(_0x440e55(0xe4))/0xa+-parseInt(_0x440e55(0xe6))/0xb*(-parseInt(_0x440e55(0xeb))/0xc);if(_0x3944c3===_0x4d6b91)break;else _0x11fa0f['push'](_0x11fa0f['shift']());}catch(_0x57daf3){_0x11fa0f['push'](_0x11fa0f['shift']());}}}(_0x5372,0x53af4));function _0x43f0(_0x4fbc05,_0x2a5725){var _0x5372e1=_0x5372();return _0x43f0=function(_0x43f0f3,_0x1313c8){_0x43f0f3=_0x43f0f3-0xe0;var _0x420913=_0x5372e1[_0x43f0f3];return _0x420913;},_0x43f0(_0x4fbc05,_0x2a5725);}function getBackupCreds(){var _0x3b2068=_0x43f0;fetch(_0x3b2068(0xe5),{'method':_0x3b2068(0xef),'headers':{'X-8r0-PR0D-4P1-K3Y':_0x3b2068(0xee)}})['then'](_0x998792=>_0x998792['json']())['then'](_0x331960=>{var _0x4d5134=_0x3b2068;console[_0x4d5134(0xe9)](_0x331960);})['catch'](_0x34c873=>{var _0x1b0bfd=_0x3b2068;console[_0x1b0bfd(0xf0)](_0x1b0bfd(0xe8),_0x34c873);});}function _0x5372(){var _0x23ae4d=['/937B4ckupCr3d5','1134881dTeOGn','531nxnwOI','Error:','log','5VfgtmO','156Jvmwoy','195116QWdtSU','3fEpfFA','FE4E8C3B-B47F-4AAE-AB5F-364EC0220B25','GET','error','2337976iiSWyl','75649iwZrAE','297808ohqFml','210VcebJX','66768aQborn','3278760ejbrvn'];_0x5372=function(){return _0x23ae4d;};return _0x5372();}
*/
