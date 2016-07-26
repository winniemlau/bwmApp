dateFormatDb = 'YYYY-MM-DD';
eventsSubscription = Meteor.subscribe('events');

Session.set('start', moment().startOf('day').format(dateFormatDb));
Session.set('end', moment().endOf('day').add(1, 'months').format(dateFormatDb));
