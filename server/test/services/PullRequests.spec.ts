import PullRequests from "../../src/services/PullRequests";
import { expect } from "chai";

describe('PullRequests', () => {

    it('should fetch pull requests', () => {

      expect(PullRequests.fetch()).to.deep.equal({some: "json"});
    })
  })

