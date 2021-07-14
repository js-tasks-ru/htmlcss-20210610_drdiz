    let F = 1;
    document.getElementById("1").addEventListener("input", changetabs1)

    function changetabs1() {
        F = document.getElementById('1').value

    }
    document.getElementById("2").addEventListener("input", changetabs2)

    function changetabs2() {
        F = document.getElementById('2').value

    }
    document.getElementById("3").addEventListener("input", changetabs3)

    function changetabs3() {
        F = document.getElementById('3').value

    }
    document.getElementById("4").addEventListener("input", changetabs4)

    function changetabs4() {
        F = document.getElementById('4').value

    }

    document.getElementById('tabs').addEventListener("input", changeall)

    function changeall() {

        if (F == 1) {
            document.getElementById('b1').style.display = 'flex';
            document.getElementById('b2').style.display = 'flex';
            document.getElementById('b3').style.display = 'flex';
            document.getElementById('b4').style.display = 'flex';
            document.getElementById('b5').style.display = 'flex';
            document.getElementById('b6').style.display = 'flex';

        }
        if (F == 2) {
            document.getElementById('b1').style.display = 'none';
            document.getElementById('b2').style.display = 'flex';
            document.getElementById('b3').style.display = 'none';
            document.getElementById('b4').style.display = 'none';
            document.getElementById('b5').style.display = 'flex';
            document.getElementById('b6').style.display = 'flex';

        }
        if (F == 3) {
            document.getElementById('b1').style.display = 'flex';
            document.getElementById('b2').style.display = 'none';
            document.getElementById('b3').style.display = 'flex';
            document.getElementById('b4').style.display = 'flex';
            document.getElementById('b5').style.display = 'none';
            document.getElementById('b6').style.display = 'none';

        }

    }