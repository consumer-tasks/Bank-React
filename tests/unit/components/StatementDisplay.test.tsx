import { screen, within} from "@testing-library/react";
import { renderHook, act } from '@testing-library/react-hooks'
import React, { useEffect } from "react";
import StatementDisplay from "../../../src/components/StatementDisplay";
import * as getStatement from '../../../src/api/getStatement';
import {namedTypes} from "ast-types";
import {render} from "../../helpers/testUtils";

const spyOnGetStatement = jest.spyOn(getStatement, "default")

describe('Display', () => {

  it('shows a header row', async () => {
    render(<StatementDisplay />)
    const rows = await screen.findAllByRole('row');
    expect(within(rows[0]).getAllByRole('cell')[0]).toHaveTextContent("Date")
    expect(within(rows[0]).getAllByRole('cell')[1]).toHaveTextContent("Amount")
    expect(within(rows[0]).getAllByRole('cell')[2]).toHaveTextContent("Balance")
  });

  it('shows a row of transactions', async () => {
    spyOnGetStatement.mockResolvedValue(Promise.resolve(
      {
        statementRecords: [
          {date: "21/05/21", amount: 1000, balance: 1000 }
        ]
      })
    );

    render(<StatementDisplay />)

    await screen.findByText("21/05/21");
    const rows = await screen.findAllByRole('row');

    expect(within(rows[1]).getAllByRole('cell')[0]).toHaveTextContent("21/05/21")
    expect(within(rows[1]).getAllByRole('cell')[1]).toHaveTextContent("1000")
    expect(within(rows[1]).getAllByRole('cell')[2]).toHaveTextContent("1000")

  });


  it('gets recent transactions', async () => {
    // set up
    render(<StatementDisplay />)

    // assertion
    expect(spyOnGetStatement).toBeCalled();
  });

})
