function search(e)
{
	const key = e.keyCode || e.charCode || 0;

	// 13はEnterキーのキーコード
	if (key == 13)
	{
	  	const text = document.getElementById("search-text")
		// const submit = document.getElementById("search-submit")
		// submit.addEventListener("click", () => {
		// window.location.href = "/search/?search=" + text.value
		// })
		window.location.href = "/search/?search=" + text.value
	}
}
