
function WorkshopTestData( type, namespace )
{
	if ( type == 'friends' )
	{
		namespace.ReceiveIndex( { totalresults: 0 } );
		return;
	}

	namespace.ReceiveIndex( { totalresults: 120, results: [ 1234, 12345, 123456, 1234567, 3, 4, 5, 78, 9, 885, 456, 65, 27, 548, 9, 3455, 345, 677, 876 ] } );

	namespace.ReceiveFileInfo( 1234, { "created": 1.33679e+009, "ownername": "garry :D", "description": "The name explains what to do.\n\nUse your crossbow to assasinate Breen and his bodyguards!", "tags": "save", "id": "71502490", "owner": "76561197965224200", "previewsize": 16322, "previewid": "540675364321761226", "updated": 1.33679e+009, "title": "Assasinate Breen.", "disabled": false, "installed": false, "banned": false, "size": 21733, "fileid": "540675364321760831" } )
	namespace.ReceiveFileInfo( 12345, { "created": 1.33679e+009, "description": "The name explains what to do.\n\nUse your crossbow to assasinate Breen and his bodyguards!", "tags": "save", "id": "71502490", "owner": "76561197965224200", "previewsize": 16322, "previewid": "540675364321761226", "updated": 1.33679e+009, "title": "Really long title that sucks cocks", "disabled": false, "installed": false, "banned": false, "size": 21733, "fileid": "540675364321760831" } )

	namespace.ReceiveImage( 12345, "../cache/630737834418002174.cache" );

	namespace.ReceiveVoteInfo( "1234", { "score": 0.5, "total": 2, "down": 1, "up": 1 } )
	namespace.ReceiveVoteInfo( "12345", { "score": 0, "total": 0, "down": 0, "up": 0 } )
	namespace.ReceiveVoteInfo( "123456", { "score": 0.5146, "total": 3, "down": 0, "up": 3 } )
	namespace.ReceiveVoteInfo( "1234567", { "score": 0.5098, "total": 2, "down": 0, "up": 2 } )
	namespace.ReceiveVoteInfo( "3", { "score": 0.5526, "total": 14, "down": 1, "up": 13 } )
	namespace.ReceiveVoteInfo( "885", { "score": -0.5098, "total": 2, "down": 2, "up": 0 } )
}
