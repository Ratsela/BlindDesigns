		function message(id)
			{
				var roomID = getRoomID();
				//alert('Room '+roomID);
				//$("#main_area >img").fadeOut(600);
				//$("#main_area >img#44").fadeIn(600);
				
				
				
				if(roomID == 3)
				{
					if(id == 4)
					{
						$("#main_area >img").fadeOut(5);
						//$("#main_area >img#44").fadeIn(5);
					}
					else if(id == 2)
					{
						$("#main_area >img").fadeOut(5);
						//$("#main_area >img#55").fadeIn(5);
					}
				}
				
				/*switch(id){
					case 1:
						if(roomID == 1){
							alert('Room '+roomID);
						}
						else if(roomID == 2){
							alert('Room '+roomID);
						}
						else if(roomID == 3){
							alert('Room '+roomID);
						}
						else if(roomID == 4){
							//alert('Room '+roomID);
							$("#main_area >img").fadeOut(600);
							$("#main_area >img#44").fadeIn(600);
						}
						break;
					/*case 2:
						if(roomID == 1){
							alert('Room '+roomID);
						}
						else if(roomID == 2){
							alert('Room '+roomID);
						}
						else if(roomID == 3){
							alert('Room '+roomID);
						}
						else if(roomID == 4){
							//alert('Room '+roomID);
								$("#main_area >img").fadeOut(600);
							$("#main_area >img#44").fadeIn(600);
						}
						break;
					case 3:
						if(roomID == 1){
							alert('Room '+roomID);
						}
						else if(roomID == 2){
							alert('Room '+roomID);
						}
						else if(roomID == 3){
							alert('Room '+roomID);
						}
						else if(roomID == 4){
							//alert('Room '+roomID);  
								$("#main_area >img").fadeOut(600);
							$("#main_area >img#44").fadeIn(600);
						}
						break;
					case 4:
						if(roomID == 1){
							alert('Room '+roomID);
						}
						else if(roomID == 2){
							alert('Room '+roomID);
						}
						else if(roomID == 3){
							alert('Room '+roomID);
						}
						else if(roomID == 4){
							//alert('Room '+roomID);
							$("#main_area >img").fadeOut(600);
							$("#main_area >img#44").fadeIn(600);
						}
						break;
					default:
						alert('Error');
				}*/
			}
