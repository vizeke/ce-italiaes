const template = '<div> ' +
    '  <br/>' +
    '  <label>Nome<label>' +
    '  <input type="text" />' +
    '  <br/>' +
    '  <label>Email<label>' +
    '  <input type="text" />' +
    '  <br/>' +
    '  <label>Telefone<label>' +
    '  <input type="text" />' +
    '</div> ';

$( '.appointments-instructions' ).after( template );

$( '.appointments-list table td:not(.appointments-weekly-calendar-hours-mins)' )
    .each( ( i, item ) => {
        $( item ).append( '<input type="checkbox" />' );
    } );

$( 'button#enviar' ).click( () => {
    console.log( 'extension', AppShortcodeConfirmation );
} );
