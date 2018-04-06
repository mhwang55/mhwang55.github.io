scrWidth = screen.width;

$(document).ready(function()
		{
			changeTitle();
			checker();
		}
);

function changeTitle()
{
	$("h1").html("Hello");
	$("#topBar").css({'width': scrWidth});
}

function checker()
{
	$('.inputField').focus(function()
		{
			if($(this).val() === $(this).prop('defaultValue'))
			{
				$(this).val("");
			}
			if($(this).attr("id") === "pass")
			{
				$(this).attr("type", "password");
			}
		}
	).blur(function()
		{	
			if ($(this).val() === "") 
			{
				$(this).val($(this).prop('defaultValue'));
				if($(this).attr("type", "password"))
				{
					$(this).attr("type", "text");
				}
			}
		}
	);
}


