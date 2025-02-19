"use client";

export default async function GetNotes() {

    const selections = miro.board.getSelection()
    console.log(selections)

    // return (
    //     <div>
    //         <h3>API usage demo</h3>
    //         <p className="p-small">API Calls need to be authenticated</p>
    //         <p>
    //             Apps that use the API usually would run on your own domain. During
    //             development, test on http://localhost:3000
    //         </p>
    //         <a className="button button-primary" target="_blank">
    //             Login
    //         </a>
    //         {/* {authUrl ? (
    //             <a className="button button-primary" href={authUrl} target="_blank">
    //                 Login
    //             </a>
    //         ) : (
    //             <>
    //                 <p>This is a list of all the boards that your user has access to:</p>

    //                 <ul>
    //                     {boards?.map((board) => (
    //                         <li key={board.name}>{board.name}</li>
    //                     ))}
    //                 </ul>
    //             </>
    //         )} */}
    //     </div>
    // );
};
