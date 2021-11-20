import getStatement from "../../../src/api/getStatement";
import * as fetch from "isomorphic-unfetch";
import { Statement } from "../../../src/interfaces/Statement";

describe('getStatement', () => {
  it('returns statement', async () => {
    const statement = await getStatement();

    const expectedStatement: Statement = {
      statementRecords: []
    };

    expect(statement).toEqual(expectedStatement);
  })
});
