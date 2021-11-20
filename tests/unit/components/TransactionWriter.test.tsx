import React from "react";
import {screen, waitFor} from "@testing-library/react";
import TransactionWriter from "../../../src/components/TransactionWriter";
import userEvent from "@testing-library/user-event";
import * as postTransaction from "../../../src/api/postTransaction";
import {render} from "../../helpers/testUtils";

const spyOnPostTransaction = jest.spyOn(postTransaction, "default")

describe('TransactionWriter', () => {
  it('renders an Amount input', () => {
    render(<TransactionWriter />)
    expect(screen.getByLabelText("Amount")).toBeInTheDocument();
  });

  it('renders a button for deposit', () => {
    render(<TransactionWriter />)
    expect(screen.getByRole('button', {name: /deposit/i})).toBeInTheDocument();
  });

  it('renders a button for withdraw', () => {
    render(<TransactionWriter />)
    expect(screen.getByRole('button', {name: /withdraw/i})).toBeInTheDocument();
  });

  it('deposits 1000', async () => {
    const params = { action: 'DEPOSIT', amount: '1000'};
    render(<TransactionWriter />)
    userEvent.type(screen.getByLabelText("Amount"), "1000");

    userEvent.click(screen.getByText('Deposit'))

    await waitFor(() => {
      expect(spyOnPostTransaction).toHaveBeenCalledWith(params);
    });

  });
})
