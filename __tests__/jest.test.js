var _ = require('underscore');

describe('A suite', function() {
    it('should sort nav items by title', function() {
      expect(_.sortBy(
          [
              {id: 1, title: 'b'}, 
              {id: 2, title: 'c'},
              {id: 3, title: 'a'}
            ], 'title')).toEqual(
         [
            {id: 3, title: 'a'}, 
            {id: 1, title: 'b'},
            {id: 2, title: 'c'}
        ]
      );
    });
});