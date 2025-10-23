function search() {
    let query = 
document.getElementById("searchBox").value;
    if (query === "") {
document.getElementById("result").innerText = "please type something!";}
    else
{document.getElementById("result").innerText ="You searched for: " + query}
}